'use client'
import React from 'react'
import { AlertTriangle, Shield, MapPin, MapPinned } from 'lucide-react'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { weights } from '@/lib/Weights'
import { CrimeStat, crimeStats } from '@/lib/CrimeStats'
import { DialogTrigger } from '@radix-ui/react-dialog'

type DistanceProps = {
  leg: google.maps.DirectionsLeg | undefined
}

const getSafetyLevel = (index: number) => {
  if (index >= 8) return { label: 'Very Safe', color: 'bg-emerald-500', textColor: 'text-emerald-700' }
  if (index >= 6) return { label: 'Safe', color: 'bg-green-500', textColor: 'text-green-700' }
  if (index >= 4) return { label: 'Moderate', color: 'bg-amber-500', textColor: 'text-amber-700' }
  if (index >= 2) return { label: 'Caution', color: 'bg-orange-500', textColor: 'text-orange-700' }
  return { label: 'High Alert', color: 'bg-red-500', textColor: 'text-red-700' }
}

function PlaceInfo({ leg }: DistanceProps) {
  function extractJohannesburg(value: string) {
    const match = value.match(/\bJohannesburg\b/i)
    return match ? match[0] : null
  }

  // read saved city safely (client only)
  const savedCity = typeof window !== 'undefined' ? extractJohannesburg(localStorage.getItem('city') || '') : null

  function getJohannesburgStations(stats: CrimeStat[]) {
    return stats.filter((item) => item.district === 'Johannesburg')
  }

const getSafetyColor = (index: number) => {
  if (index <= 3) return 'text-red-600'
  if (index <= 6) return 'text-orange-600'
  return 'text-green-600'
}

const getSafetyText = (index: number) => {
  if (index <= 3) return 'High Risk'
  if (index <= 6) return 'Moderate Risk'
  return 'Low Risk'
}

const formatCrimeName = (name: string) => {
  return name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}


  // pick the first matching record, use safe defaults with optional chaining elsewhere
  const jhbList = Array.isArray(crimeStats) ? getJohannesburgStations(crimeStats) : []
  const crimeData= jhbList[0] ?? null

  const safetyIndex = crimeData?.safety_index ?? 0
  const safety = getSafetyLevel(safetyIndex)

  return (
    <Dialog >
      <DialogTrigger asChild>
        <MapPinned stroke="purple" className="w-8 h-8" />
        </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] bg-purple-50 border-purple-200">
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <DialogTitle className="text-3xl font-bold text-purple-900">
              Know Before You Go
            </DialogTitle>
          </div>
          <DialogDescription className="text-purple-700 text-base">
            Stay informed about safety conditions in your destination area
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-200px)] pr-4">
          <div className="space-y-6">
            {/* Location Header */}
            <Card className="p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <h3 className="text-2xl font-bold">{crimeData.station}</h3>
                  </div>
                  <p className="text-purple-100">
                    {crimeData.district}, {crimeData.province}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-purple-200 mb-1">Safety Index</p>
                  <div
                    className={`text-4xl font-bold ${getSafetyColor(crimeData.safety_index)}`}
                  >
                    {crimeData.safety_index}/10
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-white/20 text-white border-0"
                  >
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    {getSafetyText(crimeData.safety_index)}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Contact Crimes */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-purple-600" />
                Contact Crimes
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(crimeData.contact_crimes).map(
                  ([crime, count]) => (
                    <Card
                      key={crime}
                      className="p-4 bg-white border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-purple-700 font-medium">
                          {formatCrimeName(crime)}
                        </span>
                        <Badge className="bg-purple-100 text-purple-900 border-0">
                          {count}
                        </Badge>
                      </div>
                    </Card>
                  )
                )}
              </div>
            </div>

            {/* Property Crimes */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-purple-600" />
                Property Crimes
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(crimeData.property_crimes).map(
                  ([crime, count]) => (
                    <Card
                      key={crime}
                      className="p-4 bg-white border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-purple-700 font-medium">
                          {formatCrimeName(crime)}
                        </span>
                        <Badge className="bg-purple-100 text-purple-900 border-0">
                          {count}
                        </Badge>
                      </div>
                    </Card>
                  )
                )}
              </div>
            </div>

            {/* Other Crimes */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-purple-600" />
                Other Crimes
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(crimeData.other_crimes).map(
                  ([crime, count]) => (
                    <Card
                      key={crime}
                      className="p-4 bg-white border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-purple-700 font-medium">
                          {formatCrimeName(crime)}
                        </span>
                        <Badge className="bg-purple-100 text-purple-900 border-0">
                          {count}
                        </Badge>
                      </div>
                    </Card>
                  )
                )}
              </div>
            </div>

            {/* Police Detected Crimes */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-purple-600" />
                Police Detected
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(crimeData.police_detected).map(
                  ([crime, count]) => (
                    <Card
                      key={crime}
                      className="p-4 bg-white border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-purple-700 font-medium">
                          {formatCrimeName(crime)}
                        </span>
                        <Badge className="bg-purple-100 text-purple-900 border-0">
                          {count}
                        </Badge>
                      </div>
                    </Card>
                  )
                )}
              </div>
            </div>

            {/* Safety Tips */}
            <Card className="p-6 bg-purple-100 border-purple-300">
              <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Safety Tips
              </h4>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Stay aware of your surroundings at all times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Keep your Pengard panic button easily accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Share your location with trusted contacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Trust your instincts and avoid unsafe situations</span>
                </li>
              </ul>
            </Card>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

function StatItem({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-3 ${highlight ? 'bg-purple-100 border border-purple-300' : 'bg-purple-50'}`}>
      <p className="text-xs text-purple-600 mb-1">{label}</p>
      <p className={`text-lg font-bold ${highlight ? 'text-purple-900' : 'text-purple-800'}`}>{value}</p>
    </div>
  )
}

export default PlaceInfo