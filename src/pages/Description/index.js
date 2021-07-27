import { DescriptionsComents } from "../../components/DescriptionComents";
import { DescriptionFooter } from "../../components/DescriptionFooter";
import { DescriptionSection } from "../../components/DescriptionSection";
import { DescriptionSummary } from "../../components/DescriptionSummary";

const Description = () => {
  return (
    <>
      <DescriptionSection />
      <DescriptionSummary />
      <DescriptionsComents />
      <DescriptionFooter />
    </>
  );
};
export { Description };
