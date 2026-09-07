"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL = 3;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef(
    Array.from({ length: TRAIL }, () => ({ x: 0, y: 0 }))
  );
  const hoveringRef = useRef(false);
  const labelRef = useRef("");
  const visibleRef = useRef(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const interactiveOf = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return { hover: false, label: "" };
      const node = target.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor]"
      );
      if (!node) return { hover: false, label: "" };
      const cursor = node.getAttribute("data-cursor");
      return { hover: true, label: cursor === "view" ? "View" : "" };
    };

    const onMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (!visibleRef.current) {
        visibleRef.current = true;
        pos.current.x = event.clientX;
        pos.current.y = event.clientY;
        trail.current = trail.current.map(() => ({
          x: event.clientX,
          y: event.clientY,
        }));
        setVisible(true);
        startTick();
      }

      const state = interactiveOf(event.target);
      if (state.hover !== hoveringRef.current) {
        hoveringRef.current = state.hover;
        setHovering(state.hover);
      }
      if (state.label !== labelRef.current) {
        labelRef.current = state.label;
        setLabel(state.label);
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    let frame = 0;
    const tick = () => {
      if (!visibleRef.current) {
        frame = 0;
        return;
      }

      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;

      const ring = ringRef.current;
      const dot = dotRef.current;
      if (ring) {
        ring.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dot) {
        dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      let tx = pos.current.x;
      let ty = pos.current.y;
      trail.current.forEach((point, i) => {
        point.x += (tx - point.x) * (0.28 - i * 0.03);
        point.y += (ty - point.y) * (0.28 - i * 0.03);
        tx = point.x;
        ty = point.y;
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
        }
      });

      frame = requestAnimationFrame(tick);
    };

    const startTick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden overflow-hidden md:block"
      aria-hidden
    >
      {Array.from({ length: TRAIL }).map((_, i) => (
        <div
          key={i}
          ref={(node) => {
            trailRefs.current[i] = node;
          }}
          className="absolute left-0 top-0 rounded-full bg-[#7BB668]"
          style={{
            width: 10 - i,
            height: 10 - i,
            opacity: visible ? 0.28 - i * 0.045 : 0,
            filter: "blur(1px)",
            willChange: "transform, opacity",
          }}
        />
      ))}

      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-[#7BB668] transition-[width,height,background-color,box-shadow,opacity] duration-300"
        style={{
          width: hovering ? 72 : 40,
          height: hovering ? 72 : 40,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering ? "rgba(123, 182, 104, 0.18)" : "transparent",
          boxShadow: hovering
            ? "0 0 28px rgba(123, 182, 104, 0.45)"
            : "0 0 16px rgba(123, 182, 104, 0.2)",
          willChange: "transform",
        }}
      >
        {label ? (
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7BB668]">
            {label}
          </span>
        ) : null}
      </div>

      <div
        ref={dotRef}
        className="absolute left-0 top-0 rounded-full bg-[#7BB668] shadow-[0_0_12px_rgba(123,182,104,0.8)] transition-[width,height,opacity] duration-200"
        style={{
          width: hovering ? 6 : 8,
          height: hovering ? 6 : 8,
          opacity: visible ? 1 : 0,
          willChange: "transform",
        }}
      />
    </div>
  );
}
