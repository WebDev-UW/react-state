export default function Section ({ level, children }) {
  // TODO: How can we use the section level passed in to make it available to all children, such as Items or nested Sections  
  return (
    <div style={{ padding: 8 }}>{children}</div>
  )
}