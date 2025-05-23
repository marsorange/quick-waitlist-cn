import { Github, Linkedin, X } from "lucide-react";
import Link from "next/link";

const CardFooter = () => {
  return (
    <div className="pt-4 space-y-2">
      <div className="text-[#B1ACA4] text-[12px]">
        我们十分重视您的信息安全 {" "}
        <Link
          href="/privacy-policy"
          className="underline transition-all duration-200 hover:text-black/70"
        >
          隐私政策
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;
