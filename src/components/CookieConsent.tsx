
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show cookie consent after a slight delay for better UX
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl">
        <div className="bg-background/95 backdrop-blur-md shadow-lg border border-border rounded-xl p-6 animate-slide-in">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-muted/50 p-3">
              <Cookie className="h-6 w-6 text-neon" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
              <p className="text-muted-foreground text-sm">
                This website uses cookies to enhance your browsing experience, analyze site traffic,
                and personalize content. By accepting, you consent to our use of cookies.
                Learn more in our privacy policy.
              </p>
              
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAccept} className=" relative">
                  Accept All
                </Button>
                <Button variant="outline" onClick={handleDecline}>
                  Decline Non-Essential
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
