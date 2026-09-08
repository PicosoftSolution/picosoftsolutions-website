import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Share2,
  LineChart,
  Target,
  Compass,
  Handshake,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  type LucideProps,
} from "lucide-react";

const registry = {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Share2,
  LineChart,
  Target,
  Compass,
  Handshake,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
};

export type IconName = keyof typeof registry;

export default function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Cmp = registry[name];
  return <Cmp {...props} />;
}
