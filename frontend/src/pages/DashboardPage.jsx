import StatsCard from '../components/StatsCard'
import ChartComponent from '../components/ChartComponent'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Overview of festival concepts and innovation metrics</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">FestCraft Dashboard</h1>
          <p className="text-slate-400">Your creative festival planning hub</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"label":"Total Concepts","value":"24","icon":"lightbulb","color":"blue"},{"label":"Concepts In Development","value":"8","icon":"cogs","color":"orange"},{"label":"Avg Innovation Score","value":"7.2","icon":"star","color":"yellow"},{"label":"Production Ready","value":"5","icon":"check-circle","color":"green"},{"label":"Innovation Ideas","value":"32","icon":"rocket","color":"purple"},{"label":"High Impact Innovations","value":"12","icon":"trophy","color":"red"}]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: card</p>
      </div>

      <ChartComponent key="3" type="bar" title="Innovation Trends" data={{}} />
    </div>
  )
}
