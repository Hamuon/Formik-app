import React from "react";
const RadioInput = ({ name, formik, checkBoxOptions }) => {
  return (
    <div className="formControl">
      {checkBoxOptions.map((item) => (
        <React.Fragment key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name].includes(item.value)} 
            />
            <label htmlFor={item.value}>{item.label}</label>
          </React.Fragment>
        ))}
        {formik.errors[name] && formik.touched[name] && (
          <div className="error">{formik.errors[name]}</div>
        )}
    </div>
  );
};

export default RadioInput;
