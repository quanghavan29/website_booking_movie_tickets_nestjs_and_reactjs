import React, { useState } from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function MenuHome() {

    const [state, setState] = useState({ tabPosition: 'left' });

    // const changeTabPosition = e => {
    //     this.setState({ tabPosition: e.target.value });
    // };

    const { tabPosition } = state;

    return (
        <>
            <Tabs tabPosition={tabPosition}>
                <TabPane tab={<img className="rounded-full" src="https:picsum.photos/200" alt="img.jpg" width={50} />} key="1">
                    Tab 1
                </TabPane>
                <TabPane tab={<img className="rounded-full" src="https:picsum.photos/200" alt="img.jpg" width={50} />} key="2">
                    Tab 2
                </TabPane>
                <TabPane tab={<img className="rounded-full" src="https:picsum.photos/200" alt="img.jpg" width={50} />} key="3">
                    Tab 3
                </TabPane>
            </Tabs>
        </>
    )
}
