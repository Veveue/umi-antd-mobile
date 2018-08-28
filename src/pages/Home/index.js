import React, { PureComponent } from "react";
import { Button, Icon } from "antd-mobile";
import Layout from "layouts/Layout";
import Icons from "components/Icon";

export default class Home extends PureComponent {
    render() {
        return <Layout><Button>demo</Button>
            <Icons
                type={require(`assets/svg/card.svg`)}
                size={"lg"}
                color={"red"}
            />
            <Icon
                type={"loading"}
                size={"lg"}
                color={"green"}
            />
            <img src={require(`assets/svg/pdf.svg`).default} alt=""/>
        </Layout>
    }
}