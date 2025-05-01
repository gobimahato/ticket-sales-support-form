import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <section className="flex min-h-screen w-screen flex-col items-center justify-center px-5">
      <h1 className="mb-7 text-4xl font-bold">Contact Us</h1>

      <Card className="w-full max-w-md">
        <Tabs defaultValue="sales">
          <CardContent className="mt-3">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sales">Talk to Sales</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="sales">
              <p className="text-muted-foreground pt-2">
                You want to integrate your product with us? We can help you.
                Please contact us down below.
              </p>

              <form className="mt-5 flex flex-col gap-y-4">
                <div className="grid space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="e.g. Jane Doe" />
                </div>

                <div className="grid space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e.g. jane.doe@gmail.com"
                  />
                </div>

                <div className="grid space-y-2">
                  <Label htmlFor="question">Question or Problem</Label>
                  <Textarea
                    id="question"
                    name="question"
                    placeholder="Tell us about your integration needs or any questions you have..."
                    className="h-32"
                  />
                </div>

                <Button type="submit">Submit</Button>
              </form>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </section>
  );
}
