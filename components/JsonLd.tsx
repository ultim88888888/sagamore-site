/**
 * Renders a JSON-LD structured data script tag.
 *
 * Usage:
 *   <JsonLd data={organizationSchema} />
 *   <JsonLd data={breadcrumbSchema([...])} />
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/<\//g, "<\\/") }}
    />
  );
}
