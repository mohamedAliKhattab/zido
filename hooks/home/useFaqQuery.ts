import client from "@/helpers/client";
import { FAQ } from "@/types/faq";
import { useQuery } from "@tanstack/react-query";

const useFaqQuery = () => {
  const getFaq = async (): Promise<FAQ[]> => {
    const res = await client.get(`/api/v2/faqs`);
    return res.data;
  };
  const faqQuery = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaq,
  });
  return {
    ...faqQuery,
  };
};

export default useFaqQuery;
