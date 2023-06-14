import Image from 'next/image'
import { Button } from 'antd'


export default function Home() {
  return (
      <>
          <h1>Hello World</h1>
          <div>
              <Button size="large" type="primary">
                  Button
              </Button>
          </div>
      </>
  );
}
