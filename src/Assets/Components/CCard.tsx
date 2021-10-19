import { Card } from 'antd';
import React from 'react';

interface IProps {
  cardTitle;
  cardContent;
}

export default function CCard(props: IProps) {
  const { cardTitle, cardContent } = props;
  return (
    <Card className="commonCardStyle" title={cardTitle}>
      {cardContent}
    </Card>
  );
}
