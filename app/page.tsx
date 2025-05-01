import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TalksToSalesAction } from "./action";
import SubmitButton from "@/components/SubmitButton";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen w-screen flex-col items-center justify-center px-5">
        <h1 className="mb-7 text-4xl font-bold">Contact Us</h1>

        <Card className="w-full max-w-md">
          <Tabs defaultValue="sales">
            <CardContent className="mt-3">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sales">Talk to Sales</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              {/* Sales Tab */}
              <TabsContent value="sales">
                <p className="text-muted-foreground pt-2">
                  You want to integrate your product with us? We can help you.
                  Please contact us down below.
                </p>

                <form
                  action={TalksToSalesAction}
                  className="mt-5 flex flex-col gap-y-4"
                >
                  {/* Honeypot field for spam/bot protection */}
                  <input type="hidden" name="_gotcha" />

                  {/* Name Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="sales-name">Name</Label>
                    <Input
                      id="sales-name"
                      name="name"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="sales-email">Email</Label>
                    <Input
                      id="sales-email"
                      type="email"
                      name="email"
                      placeholder="e.g. jane.doe@gmail.com"
                    />
                  </div>

                  {/* Question Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="sales-question">Question or Problem</Label>
                    <Textarea
                      id="sales-question"
                      name="question"
                      placeholder="Tell us about your integration needs or any questions you have..."
                      className="h-32"
                    />
                  </div>

                  <SubmitButton />
                </form>
              </TabsContent>

              {/* Support Tab */}
              <TabsContent value="support">
                <p className="text-muted-foreground pt-2">
                  Troubleshoot a technical issue or payment problem.
                </p>

                <form className="mt-5 flex flex-col gap-y-4">
                  {/* Honeypot field for spam/bot protection */}
                  <input type="hidden" name="_gotcha" />

                  {/* Name Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="support-name">Name</Label>
                    <Input
                      id="support-name"
                      name="name"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>
                  {/* Email Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="support-email">Email</Label>
                    <Input
                      id="support-email"
                      type="email"
                      name="email"
                      placeholder="e.g. jane.doe@gmail.com"
                    />
                  </div>
                  {/* Problem Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="support-question">
                      Question or Problem
                    </Label>
                    <Textarea
                      id="support-question"
                      name="question"
                      placeholder="Describe the issue or problem you are facing..."
                      className="h-32"
                    />
                  </div>
                  {/* Asset Upload Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="asset">Asset</Label>
                    <Input id="asset" name="asset" type="file" />
                  </div>
                  <SubmitButton />
                </form>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </section>
    </>
  );
}
