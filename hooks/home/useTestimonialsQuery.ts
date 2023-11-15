import client from "@/helpers/client";
import { Testimonials } from "@/types/testimonials";
import { useQuery } from "@tanstack/react-query";

const useTestimonialsQuery = () => {
  const getTestimonials = async (): Promise<Testimonials[]> => {
    const res = await client.get(`/api/v2/testimonials`);
    return res.data;
  };
  const testimonialsQuery = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
  return {
    ...testimonialsQuery,
  };
};

export default useTestimonialsQuery;
