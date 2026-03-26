import Breadcrumb from "@/components/Breadcrumb";
import ConsultingForm from "@/components/consulting/Form";
import Testimonials from "@/components/consulting/Rating";

export default function Consulting() {
  return (
    <>
      <Breadcrumb title="الاستشارة" pageName="الاستشارة" />
      <Testimonials />
      <ConsultingForm />
    </>
  );
}
