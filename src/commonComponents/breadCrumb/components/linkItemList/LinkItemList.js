// prop-types
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _uniqueId from "lodash/uniqueId";

// components
import LinkItem from "../linkItem";

const renderLinkItem = (item) => {
  const { name } = item;
  return <LinkItem key={_uniqueId(name)} item={item} />;
};

const LinkItemList = (props) => {
  const { items } = props;

  return _map(items, renderLinkItem);
};

LinkItemList.defaultProps = {
  items: [
    {
      text: "#Link",
      path: "#",
      isUrl: true,
    },
  ],
};

LinkItemList.propTypes = {
  items: PropTypes.array,
};

export default LinkItemList;
