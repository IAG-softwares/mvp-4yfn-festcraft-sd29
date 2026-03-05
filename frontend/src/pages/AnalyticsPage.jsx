import StatsCard from '../components/StatsCard'
import ChartComponent from '../components/ChartComponent'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-slate-400">Analytics and insights for festival concepts and innovations</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Analytics & Insights</h1>
          <p className="text-slate-400">Track progress and identify trends in your festival planning</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"label":"Total Concepts","value":"24","icon":"lightbulb","color":"blue"},{"label":"Avg Innovation Score","value":"7.2","icon":"star","color":"yellow"},{"label":"Total Innovations","value":"32","icon":"rocket","color":"purple"}]} />

      <ChartComponent key="2" type="bar" title="Concept Development Status" data={{}} />

      <ChartComponent key="3" type="bar" title="Innovation Impact vs Complexity" data={{}} />

      <ChartComponent key="4" type="bar" title="Popular Festival Formats" data={{}} />

      <ChartComponent key="5" type="bar" title="Budget Distribution by Format" data={{}} />
    </div>
  )
}
