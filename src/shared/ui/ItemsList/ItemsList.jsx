import { Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHandleScrollToBottom } from "../../hooks/useHandleScrollToBottom.js";

export const ItemsList = ({items, title}) => {
  const [ visibleItemsAmount, setVisibleItemsAmount ] = useState(100);
  const { isBottom} = useHandleScrollToBottom();

  useEffect(() => {
    setVisibleItemsAmount((prevVisibleItems) =>
      Math.min(prevVisibleItems + 100, items.length)
    );
  }, [items, isBottom]);

  return (
    <Card>
      <Card.Header>{title} {items.length}</Card.Header>
      <ListGroup>
        {items.slice(0, visibleItemsAmount).map((item, index) => (
          <ListGroup.Item key={item.toString()}>
            {index + 1}) {item.toString().replaceAll(',','+')}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}
