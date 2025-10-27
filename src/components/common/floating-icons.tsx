"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const FloatingIcon = ({ icon: Icon, className, style }: { icon: React.ElementType, className?: string, style?: React.CSSProperties }) => (
    <div
      className={cn(
        "absolute text-primary/20",
        className
      )}
      style={style}
    >
      <Icon className="w-full h-full" />
    </div>
);


export default function FloatingIcons() {
    const icons = [
        { icon: Icons.react, className: "w-16 h-16 top-[15%] left-[10%] animate-float-1" },
        { icon: Icons.nodejs, className: "w-20 h-20 top-[20%] right-[12%] animate-float-2" },
        { icon: Icons.mongodb, className: "w-12 h-12 bottom-[15%] left-[20%] animate-float-3" },
        { icon: Icons.javascript, className: "w-14 h-14 top-[60%] left-[5%] animate-float-4" },
        { icon: Icons.typescript, className: "w-16 h-16 bottom-[20%] right-[15%] animate-float-1" },
        { icon: Icons.nextjs, className: "w-12 h-12 top-[45%] right-[25%] animate-float-2" },
        { icon: Icons.firebase, className: "w-20 h-20 bottom-[5%] left-[40%] animate-float-3" },
        { icon: Icons.genkit, className: "w-14 h-14 top-[5%] right-[30%] animate-float-4" },
    ];

    return (
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
            {icons.map((item, index) => (
                <FloatingIcon key={index} icon={item.icon} className={item.className} />
            ))}
        </div>
    );
}