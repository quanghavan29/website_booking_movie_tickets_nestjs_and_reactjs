import React, { useState } from 'react'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux'

const { TabPane } = Tabs;
export default function CinemaTabs() {

    const [state, setState] = useState({ tabPosition: 'left' });
    const { cinemas } = useSelector(state => state.CinemaReducer);
    console.log(cinemas)

    // const changeTabPosition = e => {
    //     this.setState({ tabPosition: e.target.value });
    // };

    const { tabPosition } = state;

    return (
        <>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Lịch Chiếu" key="1">
                    <Tabs tabPosition={tabPosition}>
                        {cinemas.map((cinema, index) => {
                            return (
                                <TabPane key={index} tab={
                                    <div className="flex flex-row items-center justify-center">
                                        <img className="rounded-full" src={cinema.logoUrl} alt="img.jpg" width={50} />
                                        <span className="text-center ml-3" style={{fontWeight: "bold"}}>{cinema.name}</span>
                                    </div>


                                }>
                                    Tab 1
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </TabPane>
                <TabPane tab="Thông Tin" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Đánh Giá" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </>
    )
}
