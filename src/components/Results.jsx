import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th> Invested Value</th>
            <th>Invested (Year)</th>
            <th>Total Invested</th>
            <th> Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((yeardata) => {
            const totalInteres =
              yeardata.valueEndOfYear -
              yeardata.annualInvestment * yeardata.year -
              initialInvestment;

            const totalAmounutInvested = yeardata.valueEndOfYear - totalInteres;

            return (
              <tr key={yeardata.year}>
                <td>{yeardata.year}</td>
                <td>{formatter.format(yeardata.valueEndOfYear)}</td>
                <td>{formatter.format(yeardata.interest)}</td>
                <td>{formatter.format(totalInteres)}</td>
                <td>{formatter.format(totalAmounutInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
