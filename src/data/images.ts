import caseRenuity from "@/assets/case-renuity.jpg";
import caseAgione from "@/assets/case-agione.jpg";
import postTeams from "@/assets/post-teams.jpg";
import postDistributed from "@/assets/post-distributed.jpg";
import postLegacy from "@/assets/post-legacy.jpg";
import postSalesforce from "@/assets/post-salesforce.jpg";
import postOperations from "@/assets/post-operations.jpg";

export const caseImages: Record<string, string> = {
  renuity: caseRenuity,
  agione: caseAgione,
};

export const postImages: Record<string, string> = {
  "building-and-scaling-engineering-teams": postTeams,
  "staff-augmentation-and-distributed-teams": postDistributed,
  "modernizing-legacy-software": postLegacy,
  "salesforce-engineering-capacity": postSalesforce,
  "technology-for-complex-operations": postOperations,
};

export const caseImage = (slug: string) => caseImages[slug] ?? caseRenuity;
export const postImage = (slug: string) => postImages[slug] ?? postTeams;
