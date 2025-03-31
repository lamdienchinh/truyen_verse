import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  faqs?: FAQItem[];
};

const defaultFAQs: FAQItem[] = [
  {
    question: "Làm thế nào để đọc truyện trên website?",
    answer:
      "Bạn chỉ cần đăng ký một tài khoản, sau đó truy cập vào danh mục truyện để lựa chọn truyện yêu thích. Bạn có thể đọc trực tiếp trên trình duyệt mà không cần tải về.",
  },
  {
    question: "Website có hỗ trợ đọc truyện trên điện thoại không?",
    answer:
      "Chúng tôi hỗ trợ giao diện tối ưu trên cả máy tính và điện thoại, giúp bạn trải nghiệm đọc truyện mọi lúc mọi nơi.",
  },
  {
    question: "Có cần trả phí để đọc truyện không?",
    answer:
      "Phần lớn các truyện trên website đều miễn phí. Tuy nhiên, một số truyện VIP yêu cầu bạn mua điểm hoặc đăng ký gói thành viên để đọc.",
  },
  {
    question: "Làm thế nào để tìm truyện theo sở thích?",
    answer:
      "Bạn có thể sử dụng chức năng tìm kiếm hoặc lọc theo thể loại, tác giả, hoặc trạng thái truyện. Chúng tôi cũng có gợi ý truyện dựa trên lịch sử đọc của bạn.",
  },
];

const FAQ = ({
  title = "Câu hỏi thường gặp",
  faqs = defaultFAQs,
}: FAQProps) => {
  return (
    <section id="faq" className="container py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className=''>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQ;
