define [
  'cs!chaplin/application'
  'cs!chaplin/mediator'
  'cs!chaplin/dispatcher'
  'cs!chaplin/controllers/controller'
  'cs!chaplin/models/collection'
  'cs!chaplin/models/model'
  'cs!chaplin/views/layout'
  'cs!chaplin/views/view'
  'cs!chaplin/views/collection_view'
  'cs!chaplin/lib/route'
  'cs!chaplin/lib/router'
  'cs!chaplin/lib/subscriber'
  'cs!chaplin/lib/support'
  'cs!chaplin/lib/sync_machine'
  'cs!chaplin/lib/utils'
], (Application, mediator, Dispatcher, Controller, Collection, Model, Layout, View, CollectionView, Route, Router, Subscriber, support, SyncMachine, utils) ->
  Application    : Application
  mediator       : mediator
  Dispatcher     : Dispatcher
  Controller     : Controller
  Collection     : Collection
  Model          : Model
  Layout         : Layout
  View           : View
  CollectionView : CollectionView
  Route          : Route
  Router         : Router
  Subscriber     : Subscriber
  support        : support
  SyncMachine    : SyncMachine
  utils          : utils
