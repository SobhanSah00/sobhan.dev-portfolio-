import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";


interface ButtonInfo {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const buttonsJson: ButtonInfo[] = [
    {
        id: 1,
        label: "GitHub",
        link: "https://github.com/sobhansah00",
        icon: <Github className="w-5 h-5" />,
    },
    {
        id: 2,
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/SOBHAN-SAH00/",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        id: 3,
        label: "Email",
        link: "mailto:work.sobhansahoo@gmail.com",
        icon: <Mail className="w-5 h-5" />,
    },
    {
        id: 4,
        label: "Twitter",
        link: "https://x.com/Sobhan_Saho0",
        icon: <Twitter className="w-5 h-5" />,
    },
    {
        id: 5,
        label: "Resume",
        link: "https://drive.google.com/file/d/1JByAw5IK0hFf0NIROU8v7Bbvlas46FhV/view?usp=sharing",
        icon: <FileText className="w-5 h-5" />,
    },
];

export default function Buttons() {
  return (
    <div className="flex flex-wrap gap-3">
      {buttonsJson.map((btn) => (
        <Button
          asChild
          key={btn.id}
          variant="outline"
          className="flex items-center gap-2"
        >
          <a href={btn.link} target="_blank" rel="noopener noreferrer">
            {btn.icon}
            <span>{btn.label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
