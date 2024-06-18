import ProfileForm from "@/components/profileform";
import { Mail } from "@/components/resizenav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cookies } from "next/headers";
import Image from "next/image";

const layout = cookies().get("react-resizable-panels:layout");
const collapsed = cookies().get("react-resizable-panels:collapsed");

const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

export default function Home() {
  return (
    <main>
      <h1>ERP</h1>
      <Button className="border">Click</Button>
      {/* <ProfileForm></ProfileForm> */}
      <h1>Test</h1>
    </main>
  );
}
