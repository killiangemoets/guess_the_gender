import Home from "./routes/home/home.component";
import Step1 from "./routes/step1/step1.component";
import Step2 from "./routes/step2/step2.component";
import Result from "./routes/result/result.component";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
