import { useEffect, useState } from "react";

interface IconProps {
  name: string;
  className?: string;
}

export default ({ name, className }: IconProps) => {
  const [IconComponent, setIconComponent] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const module = await import(`@/app/icons/${name}.tsx`);
        setIconComponent(() => module[`MaterialSymbols${name}`]);
      } catch (error) {
        console.error(`Error loading icon "${name}":`, error);
        setIconComponent(null);
      }
    };

    loadIcon();
  }, [name]);
  return IconComponent ? <IconComponent className={className} /> : null;
};
