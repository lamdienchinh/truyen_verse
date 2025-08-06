import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as BreadcrumbWrapper,
} from "@workspace/ui/components/breadcrumb";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <BreadcrumbWrapper aria-label="Breadcrumb">
      <BreadcrumbList className="">
        {items.map((item, index) => (
          <div className="inline-flex items-center" key={index}>
            {index > 0 && <BreadcrumbSeparator className="mr-2" />}
            <BreadcrumbItem className="inline-flex items-center">
              {index === items.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={item.href}
                  className={`inline-flex items-center text-sm font-medium`}
                >
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </BreadcrumbWrapper>
  );
}
