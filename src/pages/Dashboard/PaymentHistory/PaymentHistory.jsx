import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useSecureAxios from "../../../hooks/useSecureAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments/${user?.email}`);
      return data;
    },
  });
  return (
    <div>
      <SectionTitle subheading="at a glance" heading="payment history" />
      <div className="bg-white px-10 py-8 w-[850px] mx-auto rounded">
        <p className="text-3xl font-semibold">
          Total Payments: {payments.length}
        </p>
        <div className="overflow-x-auto rounded-box bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Price</th>
                <th>Transection ID</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments.map((pay, index) => (
                <tr key={pay._id}>
                  <th>{index + 1}</th>
                  <td>{pay.email}</td>
                  <td>{pay.price}</td>
                  <td>{pay.transetionId}</td>
                  <td>{pay.status}</td>
                  <td>{pay.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
