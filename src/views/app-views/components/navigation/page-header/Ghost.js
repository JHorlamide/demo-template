import { Button, Descriptions, PageHeader } from 'antd';
import React from 'react';
const Ghost = () => (
  <div
    style={{
      backgroundColor: "#F5F5F5",
      padding: 24
    }}
  >
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a href="/#">421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">
          2017-01-10
        </Descriptions.Item>
        <Descriptions.Item label="Effective Time">
          2017-10-10
        </Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
);

export default Ghost;
