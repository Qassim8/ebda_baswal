import Breadcrumb from "@/components/Breadcrumb";
import ConsultingForm from "@/components/consulting/Form";
import { ContactCards } from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <>
      <Breadcrumb title="تواصل معنا" pageName="تواصل معنا" />
      <ContactCards />
      <ConsultingForm mode="." />
    </>
  );
}
