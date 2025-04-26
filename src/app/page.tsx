import { Button } from "@/components/ui/button";
import { ArrowRightToLine } from "lucide-react";
import React from "react";

function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="default" size="lg">
        Click me
        <ArrowRightToLine />
      </Button>
    </div>
  );
}

export default HomePage;
