const Icon = ({ type, className = "", size = "md", ...restProps }) => (
    <svg className={className ? `${className}` : `am-icon am-icon-${type.default.id} am-icon-${size} `} {...restProps}>
        <use xlinkHref={type.default.url} />
    </svg>
);
export default Icon;