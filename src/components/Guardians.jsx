import { Button, Card, Col, Row } from 'antd';
import Curupira from "../img/curupira.png";
import Naiara from "../img/naiara.png";
import Politician from "../img/politician.png";


function Guardians() {
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card 
            title="Curupira" 
            bordered={false}
            hoverable
            cover={<img alt="Curupira"  src= {Curupira} />}
            >
              <Button type="primary">Mint & Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Naiara" 
            bordered={false}
            hoverable
            cover={<img alt="Naiara"  src= {Naiara} />}
            >
              <Button type="primary">Mint & Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Politician" 
            bordered={false}
            hoverable
            cover={<img alt="Politician"  src= {Politician} />}
            >
              <Button type="primary">Mint & Play</Button>
            </Card>
          </Col>
        </Row>
      </div>,
    </div>
  );
}

export { Guardians };