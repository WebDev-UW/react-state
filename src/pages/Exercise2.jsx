import Item from '../exercise-2/Item';
import Section from '../exercise-2/Section';

export default function Exercise2() {
  // TODO: How can you refactor this page to use a context to find the level automatically for each Item component
  // so that we do not need to hard-code our levels
  return (
    <Section level={1}>
      <Item>Title</Item>
      <Section level={2}>
        <Item>Item</Item>
        <Item>Item</Item>
        <Item>Item</Item>
        <Section level={3}>
          <Item>Sub-Item</Item>
          <Item>Sub-Item</Item>
          <Item>Sub-Item</Item>
          <Section level={4}>
            <Item>Sub-sub-Item</Item>
            <Item>Sub-sub-Item</Item>
            <Item>Sub-sub-Item</Item>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}