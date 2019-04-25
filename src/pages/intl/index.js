import React from "react";
import { connect } from "dva";
import { FormattedMessage } from "react-intl";
import { Input, Pagination, DatePicker, Button } from "antd";
import styles from "./index.less";

@connect()
class HomePage extends React.Component {
  changeLocale = type => {
    const { dispatch } = this.props;
    dispatch({ type: "public/changeLocale", payload: type });
  };

  render() {
    return (
      <div className={styles.root}>
        <Button onClick={this.changeLocale.bind(this, "zh")}>zh</Button>
        <Button onClick={this.changeLocale.bind(this, "en")}>en</Button>
        <Input />
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
        <DatePicker />

        <p>
          <FormattedMessage id="hello" /> React
        </p>
      </div>
    );
  }
}

export default HomePage;
