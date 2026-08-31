import { LoaderCircle, Sparkles } from "lucide-react";

export function LoadingScreen() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-4 text-muted-foreground">
        <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-teal-700 text-white shadow-lg shadow-primary/25 dark:from-teal-300 dark:to-teal-600">
          <Sparkles size={26} />
        </div>
        <LoaderCircle className="animate-spin" size={22} />
        <p className="text-sm">Đang nạp ngân hàng câu hỏi & bài giảng GenAI...</p>
      </div>
    </main>
  );
}
