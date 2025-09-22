import Footer from "@/components/Footer";
import { mergedAgenda } from "@/components/staticData";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import Image from "next/image";

export default function Agenda() {
  return (
    <>
      <section className="flex flex-col xl:flex-row max-w-(--breakpoint-xl) justify-center mx-auto xl:h-screen gap-8 pt-20 px-4 md:px-6 xl:px-0">
        <div className="flex items-center justify-center">
          <h1 className="text-7xl md:text-9xl tracking-tighter font-semibold text-center">
            Agenda
          </h1>
        </div>

        <div className="max-w-lg overflow-scroll pb-4 md:pb-6">
          <div className="relative ml-3 overflow-scroll h-full">
            {/* Timeline line */}
            <div className="absolute left-0 top-4 bottom-0 border-l-2" />

            {mergedAgenda.map(
              ({ title, speaker, period, description, tags, image }, index) => (
                <div key={index} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background ring-8 ring-background" />

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      {image ? (
                        <Image
                          src={image}
                          alt={speaker}
                          className="h-9 w-9 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <User className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span className="text-base font-medium">{speaker}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{period}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
