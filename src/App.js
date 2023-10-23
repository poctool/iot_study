// src/App.tsx
import React from 'react';
import { Input, Select, Button, Card } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

function App() {

  return (
      <div style={{ padding: '20px' }}>
        <Card title="Vulnerability Checker" style={{ borderRadius: '8px', width: '100%' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span>Affected device: </span>
              <Input placeholder="Enter affected device" style={{ width: '80%' }} />
            </div>
            <div>
              <span>Affected model: </span>
              <Input placeholder="Enter affected model" style={{ width: '80%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <span>Vulnerability Type: </span>
            <Select defaultValue="Select vulnerability type" style={{ width: '80%' }}>
              <Option value="type1">Type 1</Option>
              <Option value="type2">Type 2</Option>
            </Select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <span>Input PoC (Python, Payload): </span>
            <TextArea rows={4} placeholder="Given a default example here" style={{ width: '80%' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Button type="primary">Start analysis</Button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <span>PoC Validation Result:</span>
            <TextArea rows={4} placeholder="Validation results here" style={{ width: '80%' }} />
          </div>

          <div>
            <span>Related Vulnerability Results:</span>
            <TextArea rows={4} placeholder="CVE list with link to details" style={{ width: '80%' }} />
          </div>
        </Card>
      </div>
  );
}

export default App;
