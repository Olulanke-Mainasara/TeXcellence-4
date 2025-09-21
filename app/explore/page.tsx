import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const Explore = () => {
  return (
    <>
      <section className="max-w-(--breakpoint-xl) mx-auto pt-20 px-4 md:px-6 xl:px-0">
        <h2 className="text-7xl md:text-9xl text-center tracking-tight font-semibold">
          Explore
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Card
              key={i}
              className="shadow-none overflow-hidden rounded-md py-0"
            >
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted w-full border-b" />
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                    Technology
                  </Badge>
                  <span className="font-medium text-xs text-muted-foreground">
                    5 min read
                  </span>
                </div>

                <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                  A beginner&apos;s guide to blackchain for engineers
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>

                <Button size="sm" className="mt-6 shadow-none">
                  Read more <ChevronRight />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Explore;
