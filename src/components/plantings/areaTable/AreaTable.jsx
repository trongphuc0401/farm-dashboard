import { useState } from "react";
import { Table, Button, Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./AreaTable.scss";

const sampleCrops = [
  {
    id: "A03",
    cropType: "Alfalf",
    botanicalName: "Alfalf, Fuchs",
    planted: "-",
    expected: "-",
  },
  {
    id: "A04",
    cropType: "Alfalf",
    botanicalName: "Alfalf, Fuchs",
    planted: "-",
    expected: "-",
  },
  {
    id: "A01",
    cropType: "Beans, Fava",
    botanicalName: "Phaseolus vulgaris, Fava",
    planted: "100 m²",
    expected: "80 kg",
  },
  {
    id: "A02",
    cropType: "Cauliflower",
    botanicalName: "Brassica oleracea var botrytis",
    planted: "50 m²",
    expected: "75 kg",
  },
];

const AreaTablePlanting = () => {
  const [crops] = useState(sampleCrops);
  const [displayType, setDisplayType] = useState("all");

  const columns = [
    {
      title: "Crop Type",
      dataIndex: "cropType",
      key: "cropType",
      render: (text, record) => (
        <div className="crop-info">
          <div className="crop-type">{record.cropType}</div>
          <div className="botanical-name">{record.botanicalName}</div>
          <div className="crop-id">{record.id}</div>
        </div>
      ),
    },
    {
      title: "Planted",
      dataIndex: "planted",
      key: "planted",
    },
    {
      title: "Expected",
      dataIndex: "expected",
      key: "expected",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Dropdown
          overlay={menu(record)}
          placement="bottomLeft"
          arrow
          trigger={["click"]}
        >
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const menu = (record) => (
    <Menu>
      <Menu.Item key="1">
        <Link to={`/${record.id}/edit`}>Edit Crop Type</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={`/${record.id}`}>Planting Details</Link>
      </Menu.Item>
      <Menu.Item key="3">New Planting</Menu.Item>
    </Menu>
  );

  const filteredCrops =
    displayType === "all"
      ? crops
      : crops.filter((crop) => crop.planted !== "-");

  return (
    <div className="area-table">
      <div className="type-buttons">
        <button
          className={displayType === "all" ? "active" : ""}
          onClick={() => setDisplayType("all")}
        >
          All Types
        </button>
        <button
          className={displayType === "planted" ? "active" : ""}
          onClick={() => setDisplayType("planted")}
        >
          Currently Planted
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={filteredCrops}
        rowKey="id"
        pagination={false}
      />
      <div className="table-footer">
        Displaying {filteredCrops.length} records
      </div>
    </div>
  );
};

export default AreaTablePlanting;
