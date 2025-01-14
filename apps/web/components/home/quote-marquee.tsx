import { Marquee } from "@workspace/ui/components/marquee";

const QuoteMarquee = () => {
  const quotes = [
    {
      text: "Người tu tiên, ngược dòng mà đi, một bước không cẩn thận, tan xương nát thịt.",
      author: "Phàm Nhân Tu Tiên",
    },
    {
      text: "Kiếp trước như mộng, kiếp này như hoa, vạn vật trên đời đều là hư ảo.",
      author: "Bách Luyện Thành Tiên",
    },
    {
      text: "Đạo không ở đâu xa, chính ở trong lòng người.",
      author: "Tiên Nghịch",
    },
    {
      text: "Người mạnh không phải không bao giờ gục ngã, mà là đứng lên sau mỗi lần vấp ngã.",
      author: "Thế Giới Hoàn Mỹ",
    },
    {
      text: "Đại đạo vô tình, nhưng nhân tâm hữu tình.",
      author: "Tinh Thần Biến",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-primary text-primary-foreground p-4">
      <Marquee pauseOnHover className="[--duration:80s]">
        {quotes.map((quote, index) => (
          <span key={index} className="inline-block mx-8 text-lg">
            <span>&ldquo;{quote.text}&rdquo;</span>
            <span className="ml-2">-&nbsp; {quote.author}</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default QuoteMarquee;
