"use client";
import React, { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Clock, Filter, Search } from "lucide-react";

const ManageReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const url = filter === "all" 
          ? "https://localhost:5000/report/getall" 
          : `https://localhost:5000/report/status/${filter}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch reports');
        const data = await response.json();
        setReports(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [filter]);

  const handleStatusUpdate = async (id, status) => {
    try {
      const response = await fetch(`https://localhost:5000/report/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (!response.ok) throw new Error('Update failed');
      const updatedReport = await response.json();
      
      setReports(reports.map(report => 
        report._id === id ? updatedReport : report
      ));
    } catch (err) {
      console.error(err);
      alert('Failed to update report status');
    }
  };

  if (loading) return <div className="text-center py-8 text-amber-800">Loading reports...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6 bg-amber-50">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">Manage Reports</h1>
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-amber-600" />
          <input
            type="text"
            placeholder="Search reports..."
            className="pl-10 pr-4 py-2 w-full border border-amber-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-amber-700" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-amber-300 rounded-lg px-3 py-2 bg-white focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="all">All Reports</option>
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-200">
            <thead className="bg-amber-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Reported Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Reporter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-amber-200">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <tr key={report._id} className="hover:bg-amber-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-amber-900">{report.itemType}</div>
                      <div className="text-sm text-amber-700">ID: {report.reportedItem}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-amber-900">{report.reporter?.name || 'Unknown'}</div>
                      <div className="text-sm text-amber-700">{report.reporter?.email || ''}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-amber-800">{report.reason}</div>
                      {report.additionalInfo && (
                        <div className="text-xs text-amber-600 mt-1">{report.additionalInfo}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                        report.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {report.status !== 'resolved' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleStatusUpdate(report._id, 'reviewed')}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Mark Reviewed
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(report._id, 'resolved')}
                            className="text-green-600 hover:text-green-800"
                          >
                            Resolve
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-amber-800">
                    No reports found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageReports;