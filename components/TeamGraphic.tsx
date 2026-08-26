const LINES = [
  { w: "38%", c: "bg-teal/70" },
  { w: "62%", c: "bg-white/20" },
  { w: "48%", c: "bg-white/10" },
  { w: "70%", c: "bg-white/20" },
  { w: "30%", c: "bg-teal/50" },
  { w: "55%", c: "bg-white/10" },
];

export default function TeamGraphic() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] to-[#060a12] p-6 shadow-[0_0_60px_-15px_rgba(45,212,200,0.25)]">
        <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-teal/10 blur-[80px]" />
        <div className="relative flex items-center gap-1.5 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] tracking-wide text-white/30">
            team-workspace.tsx
          </span>
        </div>

        <div className="relative grid grid-cols-[1fr_1.3fr] gap-5">
          <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            {LINES.map((l, i) => (
              <div
                key={i}
                className={`h-2 rounded-full ${l.c}`}
                style={{ width: l.w }}
              />
            ))}
            <div className="flex items-center gap-1.5 pt-2">
              <span className="h-3.5 w-[2px] animate-pulse-slow bg-teal" />
              <span className="h-2 w-16 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wide text-white/35">
                  Build status
                </span>
                <span className="rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-semibold text-teal">
                  Passing
                </span>
              </div>
              <div className="mt-3 flex items-end gap-1.5">
                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                  <span
                    key={i}
                    className="w-2.5 rounded-t-sm bg-gradient-to-t from-teal/30 to-teal"
                    style={{ height: `${h * 0.5}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-[11px] uppercase tracking-wide text-white/35">
                Active reviewers
              </span>
              <div className="mt-3 flex -space-x-2">
                {["#2dd4c8", "#22d3ee", "#5eead4", "#0f9c94"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-[#0b1220]"
                    style={{ backgroundColor: c }}
                  />
                ))}
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0b1220] bg-white/10 text-[10px] text-white/60">
                  +4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0a101b] p-4 shadow-xl sm:left-8">
        <span className="text-xl">🚀</span>
        <p className="max-w-[220px] text-sm text-white/60">
          From discovery to production in weeks, not quarters.
        </p>
      </div>
    </div>
  );
}
