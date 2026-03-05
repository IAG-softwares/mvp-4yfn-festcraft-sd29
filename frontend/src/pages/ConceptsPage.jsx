import StatsCard from '../components/StatsCard'
import DataTable from '../components/DataTable'
import FormComponent from '../components/FormComponent'

export default function ConceptsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Festival Concepts</h1>
        <p className="text-slate-400">Manage and develop dance festival concepts</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Festival Concepts</h1>
          <p className="text-slate-400">Manage your creative festival ideas</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"label":"Total Concepts","value":"24","icon":"lightbulb","color":"blue"},{"label":"Active Concepts","value":"8","icon":"cogs","color":"orange"}]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: cta</p>
      </div>

      <DataTable key="3" columns={[]} rows={[]} />

      <FormComponent key="4" title="Festival Concept Details" fields={[{"name":"title","label":"Concept Title","type":"text","required":true},{"name":"description","label":"Description","type":"textarea","required":true},{"name":"danceStyle","label":"Primary Dance Style","type":"select","required":true,"options":["Contemporary","Hip-Hop","Ballet","Jazz","Latin","Electronic/EDM","Folk/Traditional","Mixed Styles"]},{"name":"format","label":"Festival Format","type":"select","required":true,"options":["Single Day","Multi-Day","Competition","Showcase","Workshop Series","Immersive Experience","Virtual/Hybrid"]},{"name":"targetAudience","label":"Target Audience","type":"select","required":true,"options":["Professional Dancers","Amateur/Community","Families","Students","All Ages","18+ Adults"]},{"name":"estimatedBudget","label":"Estimated Budget","type":"currency","required":false},{"name":"capacityRange","label":"Expected Capacity","type":"select","required":false,"options":["Under 100","100-500","500-1000","1000-5000","5000+"]},{"name":"innovationScore","label":"Innovation Level (1-10)","type":"number","required":true},{"name":"feasibilityScore","label":"Feasibility Score (1-10)","type":"number","required":true},{"name":"status","label":"Development Status","type":"select","required":true,"options":["Brainstorming","In Development","Ready for Planning","In Production","Completed","On Hold"]}]} />
    </div>
  )
}
