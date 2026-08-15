import { siteWideSchemas } from "@/mocks/seo";

export default function SiteSchema() {
  return (
    <>
      {siteWideSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
}