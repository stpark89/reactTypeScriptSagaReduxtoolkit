import React, { FunctionComponent, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

const SlateComponent: FunctionComponent = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  // Keep track of state for the value of the editor.
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);
  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue: any) => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
};

export default SlateComponent;
